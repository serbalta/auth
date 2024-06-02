pipeline {
    agent any
    tools {
        maven 'Maven 3.9.7'
        nodejs 'NodeJs 22.2.0'
    }
    environment {
        dockerBackendImage = ''
        dockerFrontendImage = ''
        DOCKER_CREDENTIALS_ID = 'DockerHub' 
        DOCKERHUB_REPO_BACKEND = 'serbalta/backend'
        DOCKERHUB_REPO_FRONTEND = 'serbalta/frontend'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], userRemoteConfigs: [[url: 'git@github.com:serbalta/auth.git', credentialsId: 'GitHub']]])
            }
        }
        stage('Docker-Backend-Build') {
            steps {
                script {
                    dockerBackendImage = docker.build("${DOCKERHUB_REPO_BACKEND}:$BUILD_NUMBER", "./backend")
                }
            }
        }
        stage('Docker-Frontend-Build') {
            steps {
                script {
                    dockerFrontendImage = docker.build("${DOCKERHUB_REPO_FRONTEND}:$BUILD_NUMBER", "./frontend")
                }
            }
        }
        stage('Docker-Push') {
            steps {
                script {
                    def backendHash = dockerBackendImage.id()
                    def frontendHash = dockerFrontendImage.id()
                    def backendExists = sh(script: "docker images -q ${DOCKERHUB_REPO_BACKEND}:$BUILD_NUMBER", returnStdout: true).trim()
                    def frontendExists = sh(script: "docker images -q ${DOCKERHUB_REPO_FRONTEND}:$BUILD_NUMBER", returnStdout: true).trim()

                    if (backendHash != backendExists) {
                        docker.withRegistry('', DOCKER_CREDENTIALS_ID) {
                            dockerBackendImage.push()
                        }
                    } else {
                        echo "Backend image has not changed. Skipping push."
                    }

                    if (frontendHash != frontendExists) {
                        docker.withRegistry('', DOCKER_CREDENTIALS_ID) {
                            dockerFrontendImage.push()
                        }
                    } else {
                        echo "Frontend image has not changed. Skipping push."
                    }
                }
            }
        }
        stage('Check docker-compose file') {
            steps {
                script {
                    sh 'ls -l'
                    sh 'cat docker-compose.yml'
                }
            }
        }
       stage('Run docker-compose'){
             steps {
                script {
             sh 'docker-compose up -d'
             }
          }
       }
    }
}

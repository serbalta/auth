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
                  docker.withRegistry('', DOCKER_CREDENTIALS_ID) {
                        dockerBackendImage.push()
                        dockerFrontendImage.push()
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
             sh 'docker-compose -f /var/jenkins_home/workspace/Login/docker-compose.yml up -d'
             }
          }
       }
    }
}

pipeline {
    agent any
    tools {
        maven 'Maven 3.9.7'
        nodejs 'NodeJs 22.2.0'
    }
        environment {
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
        
         stage('Docker-Backend-Build'){
            steps{
                    sh 'docker build -t DOCKERHUB_REPO_BACKEND ./backend'
             }
        }

        stage('Docker-Frontend-Build'){
            steps{
                    sh 'docker build -t DOCKERHUB_REPO_FRONTEND ./frontend'
            }
        }
        
        stage('Docker-Push') {
            steps {
                script {
                    docker.withRegistry('', DOCKER_CREDENTIALS_ID) {
                        sh 'docker push $DOCKERHUB_REPO_BACKEND'
                        sh 'docker push $DOCKERHUB_REPO_FRONTEND'
                    }
                }
            }
        }
    }
}

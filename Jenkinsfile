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
        
         stage('Docker-Backend-Build'){
            steps{
                    dockerBackendImage = docker.build DOCKERHUB_REPO_BACKEND + ":$BUILD_NUMBER"
             }
        }

        stage('Docker-Frontend-Build'){
            steps{
                    dockerFrontendImage = docker.build DOCKERHUB_REPO_FRONTEND + ":$BUILD_NUMBER"
            }
        }
        
        stage('Docker-Push') {
            steps {
                script {
                    docker.withRegistry( '', DOCKER_CREDENTIALS_ID ) {
                    dockerBackendImage.push()
                    dockerFrontendImage.push()    
                }
            }
        }
    }
} 
}

pipeline {
    agent any
    tools {
        maven 'Maven 3.9.7'
        nodejs 'NodeJs 22.2.0'
    }
    stages {
        stage('Checkout') {
            steps {
                    checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], userRemoteConfigs: [[url: 'git@github.com:serbalta/auth.git', credentialsId: 'GitHub']]])
            }
        }
        stage('Build-Backend') {
            steps {
                dir('backend') {
                    sh 'mvn clean install'
                }
            }
        }

        stage('Build-Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }
        
         stage('Docker-Build'){
            steps{
            sh 'docker build -t serbalta/backend .'
            sh 'docker build -t serbalta/frontend .'
            }
        }
    }
}

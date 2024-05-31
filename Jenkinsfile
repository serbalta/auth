pipeline {
    agent any
    tools {
        maven 'Maven 3.9.7'
        nodeJs 'NodeJs 22'
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
        
         stage('git'){
            steps{
            git 'https://github.com/serbalta/auth.git'
            }
        }
    }
}

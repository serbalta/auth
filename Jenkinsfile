pipeline {
    agent any
    tools {
        maven 'Maven 3.9.7' 
    }
    stages {
        stage('Checkout') {
            steps {
                    checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], userRemoteConfigs: [[url: 'git@github.com:serbalta/auth.git', credentialsId: 'GitHub']]])
                    sh 'cd backend'    
                    sh 'mvn clean install'
            }
        }
         stage('git'){
            steps{
            git 'https://github.com/serbalta/auth.git'
            }
        }
    }
}

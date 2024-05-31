pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                    checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], userRemoteConfigs: [[url: 'git@github.com:serbalta/auth.git', credentialsId: 'GitHub']]])
                    cd 'backend'    
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

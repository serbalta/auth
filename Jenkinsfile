pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], userRemoteConfigs: [[url: 'git@github.com:serbalta/auth.git', credentialsId: 'GitHub']]])
            }
        }
         stage('Git Operations'){
            steps{
             sh 'git clone git@github.com:serbalta/auth.git'
             sh 'git status'
            }
        }
    }
}

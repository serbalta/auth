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
             dir('auth') {
                    sh 'git config user.email salih.773@gmail.com'
                    sh 'git config user.name serbalta'
                    sh 'git status'
                    sh 'echo "Yeni içerik" >> README.md'
                    sh 'git add README.md'
                    sh 'git commit -m "README dosyası güncellendi"'
                    sh 'git push origin master'
                }
            }
        }
    }
}

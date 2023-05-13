pipeline {
    agent any

    stages {
        stage('Build and Deploy') {
            steps {
                // Get some code from a GitHub repository
                sh 'docker compose up --build'
            }
        }
    }
}
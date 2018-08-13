pipeline {
    agent any
    stages {
        stage('nigtly Build') {
            steps {
                echo "Removing old containers........"
                sh 'docker rm -f $(docker ps -q)'
                echo "Building........"
                sh 'docker-compose up -d'
                echo "FINISHED........"
            }
        }
    }
}


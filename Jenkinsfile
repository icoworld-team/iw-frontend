pipeline {
  agent any
  stages {
    stage('Set BUILD_ID') {
      steps {
        sh 'export BUILD_ID=${BUILD_ID}'
      }
    }

    stage('Building new image') {
      steps {
        sh 'docker-compose build frontend'
      }
    }

    stage('Removing old containers') {
      steps {
        sh('''#!/bin/bash
           docker rm -f $(docker ps -a | awk '/front/{print $1}') || echo "THERE ARE NOT ANY CONTAINER WHICH CONTAIN TEST2"
          ''') 
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker-compose up -d'
      }
    }
  }
}

pipeline {
  agent any
  stages {
    stage('Set BUILD_ID') {
      steps {
        sh 'export BUILD_ID=${BUILD_ID}'
      }
    }

    stage('Build & start') {
      steps {
        sh('''#!/bin/bash
           docker-compose up --build -d || echo "THERE ARE NOT ANY CONTAINER WHICH CONTAIN TEST2"
          ''') 
      }
    }
  }
}

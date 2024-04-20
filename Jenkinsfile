pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Pipeline') {
            parallel {
                stage('Test') {
                    steps {
                        sh "npx nx test nx-apollo"
                    }
                }
                stage('Main') {
                    when {
                        branch 'main'
                    }
                    steps {
                        // This line enables distribution
                        // The "--stop-agents-after" is optional, but allows idle agents to shut down once the "e2e-ci" targets have been requested
                        // sh "npx nx-cloud start-ci-run --distribute-on='5 linux-medium-js' --stop-agents-after='e2e-ci'"
                        sh "npm ci"
                        sh "npx nx-cloud record -- nx format:check"
                        sh "npx nx affected --base=HEAD~1 -t lint test build e2e-ci"
                    }
                }
                stage('PR') {
                    when {
                        not { branch 'main' }
                    }
                    steps {
                        // This line enables distribution
                        // The "--stop-agents-after" is optional, but allows idle agents to shut down once the "e2e-ci" targets have been requested
                        // sh "npx nx-cloud start-ci-run --distribute-on='5 linux-medium-js' --stop-agents-after='e2e-ci'"
                        sh "npm ci"
                        sh "npx nx-cloud record -- nx format:check"
                        sh "npx nx affected --base origin/${env.CHANGE_TARGET} -t lint test build e2e-ci"
                    }
                }
            }
        }
    }
}

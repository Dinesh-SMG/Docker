# CI/CD Pipeline: Jenkins → AWS ECR → Kubernetes

This project demonstrates a full deployment pipeline using:

- Jenkins Pipeline (Declarative)
- AWS ECR for Docker image registry
- Kubernetes cluster for deployment
- Docker for image building

---

## Pipeline Flow

1. Jenkins clones the GitHub repository.
2. Jenkins builds a Docker image using the Dockerfile.
3. Jenkins authenticates with AWS ECR.
4. The Docker image is pushed to AWS ECR:
   <AWS_ACCOUNT_ID>.dkr.ecr.<REGION>.amazonaws.com/<REPO_NAME>:<TAG>
5. Jenkins updates the Kubernetes Deployment to pull the new ECR image.
6. Kubernetes rolls out the updated version.

---

## ECR Login Command


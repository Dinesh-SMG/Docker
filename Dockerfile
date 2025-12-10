FROM ubuntu:22.04

# Install basic tools
RUN apt-get update && apt-get install -y \
    curl \
    git \
    vim \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy project files
COPY . .

# Default command (modify based on your app)
CMD ["bash"]

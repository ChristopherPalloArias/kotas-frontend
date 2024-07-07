# Minimarket "Full Ahorro" - Inventory Management System

## Group Members

- Christopher Pallo
- Brayan Davila

## Table of Contents

1. [Problem Statement](#problem-statement)
   - [Proposed Solution](#proposed-solution)
   - [Backend](#backend)
   - [Frontend](#frontend)
2. [Benefits of Using Microservices](#benefits)
3. [Installation](#installation)
   - [Requirements](#requirements)
   - [Clone the Repository](#clone-the-repository)
   - [Install Dependencies](#install-dependencies)
   - [Start the Server](#start-the-server)
   - [Evidence](#evidence-create)
4. [Usage](#usage)
   - [Verify Server Functionality](#verify-server-functionality)
   - [Add a New Product](#add-a-new-product)
5. [Program Execution](#program-execution)
   - [Create Docker Image](#create-docker-image)
6. [DockerHub](#dockerhub)
   - [DockerHub Repository](#dockerhub-repository)

## Problem Statement

Minimarket "Full Ahorro" faces challenges in managing its inventory due to the current manual process, which causes inefficiencies and human errors. An automated system is required to allow administrators to:

1. Add new products.
2. Update the quantity of existing products.
3. View the list of available products and their quantities.

The goal is to create a simple and efficient system that ensures precise inventory management, maintaining adequate stock levels and avoiding shortages or excesses of products.

### Proposed Solution

Implement an application based on microservices, divided into two main parts:

### 1. Backend

- **Product Service:** Responsible for handling the creation, updating, and querying of products.

### 2. Frontend

- **Web Application:** User interface for administrators to interact with the product service, registering new products and updating the quantity of existing ones.

## Benefits of Using Microservices

1. **Independent Scalability:** Each component of the system can scale independently. For example, if product management requires more resources, only the product service can be scaled without affecting other parts of the system.
2. **Independent Development and Deployment:** Each microservice can be developed, deployed, and updated independently. This reduces downtime and facilitates the implementation of new features or fixes.
3. **Maintainability:** The separation of responsibilities into microservices makes the code more modular and easier to maintain. Development teams can work on different services simultaneously without interfering with each other.
4. **Resilience:** If one microservice fails, it does not necessarily affect the other services. This improves the resilience and availability of the system as a whole.

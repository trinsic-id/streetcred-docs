---
id: getting-started
title: Getting Started
sidebar_label: Start Here
---

Before you begin consuming our API, the first thing to do is setup an account with our developer portal.

## Setup your Developer Portal account

To begin, navigate to https://developer.streetcred.id and click `Continue to sign in`. If you don't have an account, click "Sign up now", otherwise login using your credentials. In future, we will use authentication that's more idiomatic to SSI and move away from usernames and passwords.

The portal is the central location for all our developer resources. Once you create an account you can register an organization, access your keys, manage your agency, and upgrade your subscription.

## Get your keys

Our API is secured using two secrets that provide access control and subscription access.

### Accessing your keys and secrets

If you haven't already registered an organization you can do so at the developer portal home page by clicking on the Register Organization button at the top.

1. Navigate to your developer portal home page.

2. Find the organization you wish to access.

3. Click on the **Show Keys** button.
 
4. Click the **Copy to Clipboard** button to copy your keys or the **X** in the top right hand corner to go back to the main view of the organization.

### Access Token and Subcription Key

These keys are used for access control to the API. Do not share the keys with anyone else and always make sure they are stored in a secure storage.
Both keys are required to make calls to the API.

## Consuming the API

Our API is accessed completely through RESTful services. There are few options to consume the API that we'll describe here.

- Pre-built packages for
    - .NET Core via Nuget
    - Nodejs via NPM
- Custom REST invocation
- Playground using Swagger UI

Before you begin, please take note of the secrets you created in the Developer Portal
- Access Token
- Subscription Key

If using the playground using Swagger UI you will need to click on the **Authorize** button or any one of the open lock icons to add your Access Token and Subscription Key.

### Nuget and ASP.NET Core

Add a package reference to your project
View our [C# sample on Github](https://github.com/streetcred-id/samples/tree/master/aspnetcore)
<!--DOCUSAURUS_CODE_TABS-->
<!--Package Manager-->
```powershell
Install-Package Streetcred.ServiceClients
```
<!--.NET CLI-->
```powershell
dotnet add package Streetcred.ServiceClients
```
<!--Package Reference-->
```xml
<PackageReference Include="Streetcred.ServiceClients" Version="1.1.1109" />
```
<!--END_DOCUSAURUS_CODE_TABS-->

### NPM and Nodejs
View our [Nodejs sample on Github](https://github.com/streetcred-id/samples/tree/master/nodejs)
<!--DOCUSAURUS_CODE_TABS-->
<!--NPM-->
```powershell
npm install @streetcred.id/service-clients
```
<!--END_DOCUSAURUS_CODE_TABS-->

### Call the REST API directly

To call the REST API directly, add the Access Token and Subscription Token to each call in the request headers.

| Header                        | Value                   | Description                         |
|-------------------------------|-------------------------|-------------------------------------|
| X-Streetcred-Subscription-Key | `<subscription key>`    | Found in the developer portal under Keys and Secrets |
| Authorization                 | `Bearer <access token>` | Found in the developer portal under Keys and Secrets |

## Manage Organizations
An agency represents a network of organizations that you control, called tenants. Each organization has its own unique endpoint, DID and wallet. All API calls are scoped to an organization (tenant). You can control multiple organizations depending on how would you like to structure your agency.

Each organization is identified with a `tenantId` that's required for all API calls. This identifier is passed to the API as a header with name `X-Streetcred-Tenant-Id` or as a function parameter when using our packaged service clients.

### Create a new organization

In the developer portal, click on **Register Organization**. Give the organization a friendly name and optionally, assign a profile photo.
Select the preferred network you would like to use with this organization. Organization can only be created on one network.
Depending on your subscription, some networks may not be available.
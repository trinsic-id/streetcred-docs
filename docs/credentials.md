---
id: credentials
title: Credentials Overview
sidebar_label: Credentials
---

## Introduction

Credentials are one of the key concepts of self-sovereign identity. We follow the Hyperledger Aries [Issue Credential Protocol 1.0](https://github.com/hyperledger/aries-rfcs/tree/master/features/0036-issue-credential) as defined by the linked RFC. 

In our API, this protocol is represented using the [Credentials Endpoints](https://app.swaggerhub.com/apis-docs/Streetcred/agency/v1#/Credentials)

A credential is given as type CredentialContract, as shown below: 

<!--DOCUSAURUS_CODE_TABS-->
<!--JSON-->
```json
{
  "credentialId": "string",
  "state": "Offered",
  "connectionId": "string",
  "definitionId": "string",
  "schemaId": "string",
  "values": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
}
```
<!--END_DOCUSAURUS_CODE_TABS-->

## Create Schemas
<!--DOCUSAURUS_CODE_TABS-->
<!--JS-->
```javascript
const schema = await client.createSchema({
    schemaParameters: {
        name: "Employee Badge",
        version: "1.0",
        attrNames: [
            "Name",
            "Role",
            "Email"
        ]
    }
});
```
<!--C#-->
```csharp

```
<!--END_DOCUSAURUS_CODE_TABS-->

### Create Credential Definitions

#### Custom
<!--DOCUSAURUS_CODE_TABS-->
<!--JS-->
```javascript
var credentialDefinition = await client.createCredentialDefinition({
    credentialDefinitionFromSchemaParameters: {
        name: "Hooli Employee Badge",
        version: "1.0",
        attrNames: ["Name", "Role", "Email"],
        supportRevocation: false,
        tag: "unique identifier"
    }
});
```
<!--C#-->
```csharp

```
<!--END_DOCUSAURUS_CODE_TABS-->

#### From Schema
<!--DOCUSAURUS_CODE_TABS-->
<!--JS-->
```javascript
var credentialDefinition = await client.createCredentialDefinition(schemaId, {
    credentialDefinitionFromSchemaParameters: {
        supportRevocation: true,
        tag: "unique identifier"
    }
});
```
<!--C#-->
```csharp

```
<!--END_DOCUSAURUS_CODE_TABS-->



## Steps to Issue a Credential

There are 3 steps in issuing a credential to a digital wallet.  

1. Offer Credential
1. Request Credential
1. Issue Credential

Our API offers two endpoints to accomplish the issuer initiated steps 1 & 3. 

### 1. Send a Credential Offer

[`POST /credentials`](https://app.swaggerhub.com/apis-docs/Streetcred/agency/v1#/Credentials/CreateCredential)
```json
{
  "definitionId": "string",
  "connectionId": "string",
  "credentialValues": {
    "additionalProp1": "string",
    "additionalProp2": "string",
    "additionalProp3": "string"
  }
}
```

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
// Create a credential definition
var credentialDefinition = await client.createCredentialDefinition(...);

// Invite someone to connect
var connection = await client.createConnection(...);

// Create a Credential and send it to the connection
var credentialOffer = await client.createCredential({
    definitionId: credentialDefinition.definitionId,
    connectionId: connection.connectionId
});
```
<!--C#-->
```cs
//todo
```
<!--Curl-->
```curl
#todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

This will send a credential offer of the specified `definitionId` to the specified `connectionId`. 

This offer will include a dictionary of `credentialValues`, which will be the values of the credential attributes. 

Each key:value pair in the credentialValues object should correspond to the list of attributes in the specified definition. 

The list of keys should match the `attributeName` list that is in the Credential definition.

### 2. Wait for a Credential Request
<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
  // you must now wait for the holder to accept the credential. 
  // you can use webhooks to be notified once the holder accepts, or 
  // get the credential record from your wallet to check for yourself.
  credential = await client.getCredential(credential.credentialId);
```
<!--C#-->
```cs
//todo
```
<!--Curl-->
```curl
#todo
```
<!--END_DOCUSAURUS_CODE_TABS-->



### 3. Issue Credential
[PUT /credentials/{credentialId}](https://app.swaggerhub.com/apis-docs/Streetcred/agency/v1#/Credentials/IssueCredential)

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
// The potential credential states are: 
// 'Offered' | 'Requested' | 'Issued' | 'Rejected' | 'Revoked'
if(credential.state === 'Requested')
{
    await client.issueCredential(credential.credentialId);
} 
```
<!--C#-->
```cs
//todo
```
<!--Curl-->
```curl
#todo
```
<!--END_DOCUSAURUS_CODE_TABS-->

This simply needs the credential identifier. If the credential is in state `requested`, the credential will be issued to the digital wallet of the individual who accepted that offered credential. 
 
## Revoke a Credential 

A credential can be revoked by using the following commands:

<!--DOCUSAURUS_CODE_TABS-->
<!--JavaScript-->
```js
await client.revokeCredential(credentialId);
```
<!--C#-->
```cs
//todo
```
<!--Curl-->
```curl
#todo
```
<!--END_DOCUSAURUS_CODE_TABS-->




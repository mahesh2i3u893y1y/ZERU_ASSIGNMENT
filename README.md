


This is a Node.js + Express + MongoDB REST API that aggregates restaking data from the EigenLayer ecosystem. The API tracks:

* Users who have restaked their stETH
* Validator metadata (including slashing history and status)
* Reward insights for any wallet address




## 📘 API Endpoints & Sample Responses

### ✅ 1. `GET /restakers`

**Description**: Returns a list of users who restaked their stETH, along with the amount and the validator address.

**Sample Response**:

```json
[
  {
    "_id": "64ef4a8e789...",
    "user": "0xabc123",
    "amountRestaked": 20.5,
    "validator": "0xval001"
  }
]
```

---

### ✅ 2. `POST /restakers`

**Description**: Add a new restaker (for testing/demo purposes).

**Body:**

```json
{
  "user": "0xabc123",
  "amountRestaked": 20.5,
  "validator": "0xval001"
}
```

---

### ✅ 3. `GET /validators`

**Description**: Returns metadata for each validator, including slashing history and current status.

**Sample Response**:

```json
[
  {
    "_id": "64ef4b6578...",
    "operatorAddress": "0xval001",
    "totalDelegatedStake": 1500,
    "slashHistory": [
      {
        "timestamp": "2024-11-01T00:00:00.000Z",
        "amount": 30,
        "reason": "missed attestation"
      }
    ],
    "status": "active"
  }
]
```

---

### ✅ 4. `POST /validators`

**Description**: Add a new validator entry.

**Body:**

```json
{
  "operatorAddress": "0xval001",
  "totalDelegatedStake": 1500,
  "slashHistory": [
    {
      "timestamp": "2024-11-01T00:00:00Z",
      "amount": 30,
      "reason": "missed attestation"
    }
  ],
  "status": "active"
}
```

---

### ✅ 5. `GET /rewards/:address`

**Description**: Returns the reward insights for a specific wallet.

**Example URL**:
`GET http://localhost:5000/rewards/0xabc123`

**Sample Response**:

```json
{
  "_id": "64ef4bfa78...",
  "wallet": "0xabc123",
  "totalRewards": 12.7,
  "perValidator": [
    {
      "validator": "0xval001",
      "reward": 12.7
    }
  ]
}
```

---

### ✅ 6. `POST /rewards`

**Description**: Add a reward record for a wallet.

**Body:**

```json
{
  "wallet": "0xabc123",
  "totalRewards": 12.7,
  "perValidator": [
    {
      "validator": "0xval001",
      "reward": 12.7
    }
  ]
}


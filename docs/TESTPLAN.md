# Test Plan for Student Account Management System

This test plan covers the business logic implemented in the legacy COBOL application for student account management. Use this plan to validate the system with business stakeholders and as a basis for future unit and integration tests in the Node.js transformation.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status (Pass/Fail) | Comments |
|--------------|----------------------|----------------|------------|-----------------|---------------|--------------------|----------|
| TC-001 | Create a new student account with valid data | System is running; no existing account with the same ID | 1. Start app 2. Enter new student details (unique ID, name, initial balance) 3. Submit | Account is created successfully with correct details |  |  |  |
| TC-002 | Attempt to create a student account with duplicate ID | System is running; account with same ID exists | 1. Start app 2. Enter student details with existing ID 3. Submit | System rejects creation and displays error for duplicate ID |  |  |  |
| TC-003 | Deposit funds into an existing account | Account exists with positive balance | 1. Start app 2. Select deposit 3. Enter valid account ID and deposit amount 4. Submit | Account balance increases by deposit amount |  |  |  |
| TC-004 | Withdraw funds with sufficient balance | Account exists with sufficient balance | 1. Start app 2. Select withdrawal 3. Enter valid account ID and withdrawal amount 4. Submit | Account balance decreases by withdrawal amount |  |  |  |
| TC-005 | Attempt withdrawal with insufficient funds | Account exists with insufficient balance | 1. Start app 2. Select withdrawal 3. Enter valid account ID and excessive withdrawal amount 4. Submit | System rejects withdrawal and displays insufficient funds error |  |  |  |
| TC-006 | View account balance and details | Account exists | 1. Start app 2. Enter account ID to view 3. Submit | System displays correct account details and balance |  |  |  |
| TC-007 | Delete an existing student account | Account exists | 1. Start app 2. Select delete 3. Enter valid account ID 4. Confirm deletion | Account is removed from the system |  |  |  |
| TC-008 | Attempt to delete a non-existent account | Account does not exist | 1. Start app 2. Select delete 3. Enter invalid account ID 4. Submit | System displays error for non-existent account |  |  |  |
| TC-009 | Data validation for account fields | System is running | 1. Start app 2. Enter invalid data (e.g., negative balance, invalid ID format) 3. Submit | System rejects invalid data and displays appropriate error |  |  |  |
| TC-010 | Ensure all operations are logged and validated | System is running | 1. Perform any account operation 2. Check logs/validation | All operations are logged and validated for integrity |  |  |  |

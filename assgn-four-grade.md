# Assignment Rubric: Cleanup, Refactoring & Adding REST Endpoints to your Application

## General Information

- **Assignment Title:** Cleanup, Refactoring & Adding REST Endpoints to your Application
- **Submission Method:** Git Repository on the **main branch**

---

## Functional Requirements (100 points)

| Requirement                                           | Points |    |
| ----------------------------------------------------- | ------ |----|
| DB                                                    |        |    |
| - neondb created                                      | 10     | 7  |
| Routes                                                |        |    |
| - api CRUD endpoints added for orders                 | 10     | 10 |
| Server                                                |        |    |
| - sequelize or mongo dependencies added               | 10     | 10 |
| - successfully connect to db                          | 10     | 6  |
| Create Database Objects Definitions                   |        |    |
| - User                                                | 10     | 7  |
| - Product                                             | 10     | 7  |
| - Order                                               | 10     | 7  |
| Change your service classes use your Database objects |        |    |
| - User                                                | 10     | 7  |
| - Product                                             | 10     | 7  |
| - Order                                               | 10     | 7  |

## Total Score: 75 / 100

"Overall this is excellent work. Unfortunately, you had a bug that you seemed to copy into three different places. In the routes you did not require the service so the endpoints were not working. 
When I fixed this locally it is working. Maybe you missed a commit?"

I copied that from Afroja's assignment which has the exact same error.  Seems
like a very odd coincidence. 

Further your data models break at startup because of how you've defined the ids.

I had to run against a clean database since you did not provide credentials.

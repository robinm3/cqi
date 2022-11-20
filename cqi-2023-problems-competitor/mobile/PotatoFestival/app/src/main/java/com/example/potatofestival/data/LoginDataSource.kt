package com.example.potatofestival.data

import com.example.potatofestival.data.model.LoggedInUser
import java.io.IOException

/**
 * Class that handles authentication w/ login credentials and retrieves user information.
 */
class LoginDataSource {

    fun login(username: String, password: String): Result<LoggedInUser> {
        try {
            if(password == "potato12345") {
                val fakeUser = LoggedInUser(java.util.UUID.randomUUID().toString(), username)
                return Result.Success(fakeUser)
            }
            return Result.Error(IOException("Error logging in"))
        } catch (e: Throwable) {
            return Result.Error(IOException("Error logging in", e))
        }
    }

    fun logout() {
        // TODO: revoke authentication
    }
}
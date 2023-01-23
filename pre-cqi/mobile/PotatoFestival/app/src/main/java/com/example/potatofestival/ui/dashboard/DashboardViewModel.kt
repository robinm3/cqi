package com.example.potatofestival.ui.dashboard

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class DashboardViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "Téléphone : 911\n" +
                "\n" +
                "Adresse postal : 4545 Pierre-de Coubertin Ave\n" +
                "\n" +
                "Adresse mail : oui@oui.com"
    }
    val text: LiveData<String> = _text
}
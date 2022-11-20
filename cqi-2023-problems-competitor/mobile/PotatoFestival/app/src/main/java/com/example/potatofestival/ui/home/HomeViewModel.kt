package com.example.potatofestival.ui.home

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class HomeViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "Dates: 26 au 27 janvier \n Lieu: Montréal"
    }
    val text: LiveData<String> = _text
}
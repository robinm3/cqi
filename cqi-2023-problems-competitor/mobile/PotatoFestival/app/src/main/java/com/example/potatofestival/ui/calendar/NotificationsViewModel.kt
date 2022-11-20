package com.example.potatofestival.ui.calendar

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class NotificationsViewModel : ViewModel() {

    private val _text = MutableLiveData<String>().apply {
        value = "" +
                "|26 janvier|\n" +
                "  \n " +
                "  \n - 10h: blabla" +
                "  \n - 11h: blabla" +
                "  \n - 12h: lunch" +
                "  \n - 13h: blabla" +
                "  \n - 14h: blabla" +
                "  \n " +
                "  \n " +
                "  \n |27 janvier|" +
                "  \n " +
                "  \n - 10h: blabla" +
                "  \n - 11h: blabla" +
                "  \n - 12h: lunch" +
                "  \n - 13h: blabla" +
                "  \n - 14h: blabla"
    }
    val text: LiveData<String> = _text
}
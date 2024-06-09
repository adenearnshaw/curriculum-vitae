package com.a10w.cv.ui.header

import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import org.jetbrains.compose.ui.tooling.preview.Preview


@Preview
@Composable
fun Header() {
    Row (modifier =
            Modifier.fillMaxWidth()
                .height(88.dp)) {
        Text("Hello")
    }

}
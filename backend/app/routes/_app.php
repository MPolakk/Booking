<?php

app()->get('/', function () {
    response()->json(['message' => 'Congrats!! You\'re on Leaf API']);
});

app()->get('/wilku', function () {
    response()->json(['message' => 'Wilku uczy sie PHP i Leafa']);
});


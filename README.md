# jquery-draggable

A simple, jQuery plugin for drag objects.

## Installation

Include script after the jQuery library (unless you are packaging scripts somehow else):

    <script src="/path/to/jquery.draggable.js"></script>

## Usage

Basic form

    $(selector).draggable();

Complete form

    $(selector).draggable({
      cursor : "move", //type of cursor;
      onDragStart : function () { console.log("Start"); }, //function before start drag
      onDragging : function () { console.log("continue"); }, //function while dragging 
      onDragEnd : function () { console.log("Finished"); } //function after finished drag
    });

## Authors
[Thyago Quintas](https://github.com/thyagoquintas)
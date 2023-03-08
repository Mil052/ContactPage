<?php
    declare(strict_types=1);

    // Require vendors and controllers
    require __DIR__ .'/vendor/autoload.php';
    require __DIR__ . '/ApiControllers/ContactController.php';

    $uri = explode("/", $_SERVER["REQUEST_URI"]);

    if ((isset($uri[2]) && $uri[2] != 'contact') || isset($uri[3])) {
        header("HTTP/1.1 404 Not Found");
        exit();
    }

    $contactController = new ContactController;
    $contactController -> processRequest();

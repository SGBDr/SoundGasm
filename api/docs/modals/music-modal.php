<?php
    $a = '{
        "response": {
            "music" : ...la music 
        }
        "HttpCode": 200,
        "datetime": {
            "date": "2023-02-27 14:54:21.538059",
            "timezone_type": 3,
            "timezone": "Europe/Berlin"
        }
    }';
    $b = '{
        "response": {
            "musics": [list of musics],
        },
        "HttpCode": 200,
        "datetime": {
            "date": "2023-02-27 14:54:21.538059",
            "timezone_type": 3,
            "timezone": "Europe/Berlin"
        }
    }';
    $c = '{
        "response": {
            "like": true,
        },
        "HttpCode": 200,
        "datetime": {
            "date": "2023-02-27 14:54:21.538059",
            "timezone_type": 3,
            "timezone": "Europe/Berlin"
        }
    }';
    $d = '{
        "response": {
            "unlike": true,
        },
        "HttpCode": 200,
        "datetime": {
            "date": "2023-02-27 14:54:21.538059",
            "timezone_type": 3,
            "timezone": "Europe/Berlin"
        }
    }';

?>
<div class="modal fade music-modal" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content p-4">
            <h3>Music Controller</h3>
            <div class="bg-light p-2">
                <small>token must be present in the header of the request</small>
                <h5>find some music by ID</h5>
                <code>url format : www.domain.com?controllers=music&method=GET&by=ID&id=:id</code>
                <div>
                    <div class="">
                        <h3>Input</h3>
                        <code>
                            :id = id of the music
                        </code>
                    </div>
                    <div class="">
                        <h3>Output</h3>
                        <pre>
                            <code>
                                <?= $a ?>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <br>
            <div class="bg-light p-2">
                <small>token must be present in the header of the request</small>
                <h5>Find music with music's or artist's name</h5>
                <code>url format : www.domain.com?controllers=music&method=GET&by=TERM&term=:term</code>
                <div>
                    <div class="">
                        <h3>Input</h3>
                        <code>
                            :term = name of artist or name of music
                        </code>
                    </div>
                    <div class="">
                        <h3>Output</h3>
                        <pre>
                            <code>
                                <?= $b ?>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <br>
            <div class="bg-light p-2">
                <small>token must be present in the header of the request</small>
                <h5>Like the song</h5>
                <code>url format : www.domain.com?controllers=music&method=UPDATE&action=LIKE&music_id=:id</code>
                <div>
                    <div class="">
                        <h3>Input</h3>
                        <code>
                            :music_id = id of the music
                        </code>
                    </div>
                    <div class="">
                        <h3>Output</h3>
                        <pre>
                            <code>
                                <?= $c ?>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <br>
            <div class="bg-light p-2">
                <small>token must be present in the header of the request</small>
                <h5>Unlike the song</h5>
                <code>url format : www.domain.com?controllers=music&method=UPDATE&action=UNLIKE&music_id=:id</code>
                <div>
                    <div class="">
                        <h3>Input</h3>
                        <code>
                            :music_id = id of the music
                        </code>
                    </div>
                    <div class="">
                        <h3>Output</h3>
                        <pre>
                            <code>
                                <?= $d ?>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <br>
            <div class="bg-light p-2">
                <small>token must be present in the header of the request</small>
                <h5>Find like song of the user</h5>
                <code>url format : www.domain.com?controllers=music&method=GET&by=LIKE</code>
                <div>
                    <div class="">
                        <h3>Input</h3>
                        <code>
                        </code>
                    </div>
                    <div class="">
                        <h3>Output</h3>
                        <pre>
                            <code>
                                <?= $b ?>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
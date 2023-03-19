<?php
    $a = '{
        "response": {
            playlist : ...playlist
        },
        "HttpCode": 200,
        "datetime": {
            "date": "2023-02-27 14:54:21.538059",
            "timezone_type": 3,
            "timezone": "Europe/Berlin"
        }
    }';
    $b = '{
        "response": [list...],
        "HttpCode": 200,
        "datetime": {
            "date": "2023-02-27 14:54:21.538059",
            "timezone_type": 3,
            "timezone": "Europe/Berlin"
        }
    }';
    $c = '{
        "response": {"add" : true},
        "HttpCode": 200,
        "datetime": {
            "date": "2023-02-27 14:54:21.538059",
            "timezone_type": 3,
            "timezone": "Europe/Berlin"
        }
    }';
    $d = '{
        "response": {"remove" : true},
        "HttpCode": 200,
        "datetime": {
            "date": "2023-02-27 14:54:21.538059",
            "timezone_type": 3,
            "timezone": "Europe/Berlin"
        }
    }';
    $e = '{
        "response": {"update" : true},
        "HttpCode": 200,
        "datetime": {
            "date": "2023-02-27 14:54:21.538059",
            "timezone_type": 3,
            "timezone": "Europe/Berlin"
        }
    }';
    $f = '{
        "response": {"create" : true},
        "HttpCode": 200,
        "datetime": {
            "date": "2023-02-27 14:54:21.538059",
            "timezone_type": 3,
            "timezone": "Europe/Berlin"
        }
    }';

?>
<div class="modal fade playlist-modal" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content p-4">
            <h3>Playlist Controller</h3>
            <div class="bg-light p-2">
                <small>token must be present in the header of the request</small>
                <h5>Find playlist by id</h5>
                <code>url format : www.domain.com?controllers=playlist&method=GET&by=ID&playlist_id=:playlist_id</code>
                <div>
                    <div class="">
                        <h3>Input</h3>
                        <code>
                            :playlist_id = id of the playlist
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
                <h5>Find playlist by name</h5>
                <code>url format : domain.com?controllers=playlist&method=GET&by=NAME&name=:name</code>
                <div>
                    <div class="">
                        <h3>Input</h3>
                        <code>
                            :name = playlist name
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
                <h5>Get all playlist of the user</h5>
                <code>url format :  www.domain.com?controllers=playlist&method=GET&by=USER</code>
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
            <br>
            <div class="bg-light p-2">
                <small>token must be present in the header of the request</small>
                <h5>Add music in playlist</h5>
                <code>url format : www.domain.com?controllers=playlist&method=UPDATE&action=ADD&music_id=:music_id&playlist_id=:playlist_id</code>
                <div>
                    <div class="">
                        <h3>Input</h3>
                        <code>
                            :music_id = value of the music_id 
                            :playlist_id = value of the playlist_id
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
                <h5>Remove music in playlist</h5>
                <code>url format : www.domain.com?controllers=playlist&method=UPDATE&action=REMOVE&music_id=:music_id&playlist_id=:playlist_id</code>
                <div>
                    <div class="">
                        <h3>Input</h3>
                        <code>
                            :music_id = value of the music_id 
                            :playlist_id = value of the playlist_id
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
                <h5>Update name of some playlist</h5>
                <code>url format : www.domain.com?controllers=playlist&method=UPDATE&action=UPDATE&name=:name</code>
                <div>
                    <div class="">
                        <h3>Input</h3>
                        <code>
                            :music_id = value of the music_id 
                        </code>
                    </div>
                    <div class="">
                        <h3>Output</h3>
                        <pre>
                            <code>
                                <?= $e ?>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <br>
            <div class="bg-light p-2">
                <small>token must be present in the header of the request</small>
                <h5>Add new playlist</h5>
                <code>url format : www.domain.com?controllers=playlist&method=PUT&name=:name</code>
                <div>
                    <div class="">
                        <h3>Input</h3>
                        <code>
                            :name = value of the name
                        </code>
                    </div>
                    <div class="">
                        <h3>Output</h3>
                        <pre>
                            <code>
                                <?= $f ?>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
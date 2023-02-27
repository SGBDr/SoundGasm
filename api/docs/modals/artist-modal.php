<?php
    $a = '{
        "response": [list artist]
        "HttpCode": 200,
        "datetime": {
            "date": "2023-02-27 14:54:21.538059",
            "timezone_type": 3,
            "timezone": "Europe/Berlin"
        }
    }';
    $b = '{
        "response": {
            "add": true,
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
            "remove": true,
        },
        "HttpCode": 200,
        "datetime": {
            "date": "2023-02-27 14:54:21.538059",
            "timezone_type": 3,
            "timezone": "Europe/Berlin"
        }
    }';

?>
<div class="modal fade artist-modal" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content p-4">
            <h3>Artist Controller</h3>
            <div class="bg-light p-2">
                <small>token must be present in the header of the request</small>
                <h5>For list of all artist</h5>
                <code>url format : www.domain.com?controllers=artist&method=GET&all=true</code>
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
                                <?= $a ?>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <br>
            <div class="bg-light p-2">
                <small>token must be present in the header of the request</small>
                <h5>For list of artist by preference o user</h5>
                <code>url format : www.domain.com?controllers=artist&method=GET&all=false</code>
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
                                <?= $a ?>
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <br>
            <div class="bg-light p-2">
                <small>token must be present in the header of the request</small>
                <h5>Add artist as Preference</h5>
                <code>url format : www.domain.com?controllers=artist&method=POST&for=ADD_PREF&artist_id=:artist_id</code>
                <div>
                    <div class="">
                        <h3>Input</h3>
                        <code>
                            :artist_id = value of the artist_id <br>
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
                <h5>Remove artist as Preference</h5>
                <code>url format : www.domain.com?controllers=artist&method=POST&for=REMOVE_PREF&artist_id=:artist_id</code>
                <div>
                    <div class="">
                        <h3>Input</h3>
                        <code>
                            :artist_id = value of the artist_id <br>
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
        </div>
    </div>
</div>
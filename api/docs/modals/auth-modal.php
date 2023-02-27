<?php
    $a = '{
        "response": {
            "logIn": true,
            "TOKEN": "token_a_utiliser_pour_toute_autres_requete"
        },
        "HttpCode": 200,
        "datetime": {
            "date": "2023-02-27 14:54:21.538059",
            "timezone_type": 3,
            "timezone": "Europe/Berlin"
        }
    }';
    $b = '{
        "response": {
            "logOut": true,
        },
        "HttpCode": 200,
        "datetime": {
            "date": "2023-02-27 14:54:21.538059",
            "timezone_type": 3,
            "timezone": "Europe/Berlin"
        }
    }';

?>
<div class="modal fade auth-modal" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content p-4">
            <h3>Auth Controller</h3>
            <div class="bg-light p-2">
                <h5>For login</h5>
                <code>url format : www.domain.com?controllers=auth&method=GET&email=:email&password=:password&log=IN</code>
                <div>
                    <div class="">
                        <h3>Input</h3>
                        <code>
                            :email = value of the mail <br>
                            :password = value of the password
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
                <h5>For logout</h5>
                <code>url format : www.domain.com?controllers=auth&method=GET&user_id=:id&log=OUT</code>
                <div>
                    <div class="">
                        <h3>Input</h3>
                        <code>
                            :user_id = value of the user_id <br>
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
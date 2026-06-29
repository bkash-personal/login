<?php

// # # # # Route # # # #

Route::PUT('bkash-payment', 'BkashController@bkash');


// # # # # Controller # # # #


public function bkash()
    {

        // Merchant Info

        $msisdn = "01200000000"; // bKash Merchant Number.

        $user = "Xyz"; // bKash Merchant Username.

        $pass = "123"; // bKash Merchant Password.

        $url = "https://www.bkashcluster.com:9081"; // bKash API URL with Port Number.

        $trxid = "66666AAAAA"; // bKash Transaction ID : TrxID.


// Final URL for getting response from bKash.

        $bkash_url = $url.'/dreamwave/merchant/trxcheck/sendmsg?user='.$user.'&pass='.$pass.'&msisdn='.$msisdn.'&trxid='.$trxid;


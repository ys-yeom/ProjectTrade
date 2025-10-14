
package com.trade.ProjectTrade.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String MainPage() {
        return "main";
    }





    @GetMapping("/talk")
    public String TalkPage() {
        return "/menu/talk";
    }

    @GetMapping("/buying_history")
    public String Buying_historyPage() {
        return "/mypage/buying_history";
    }

    @GetMapping("/deal_history")
    public String Deal_historyPage() {
        return "/mypage/deal_history";
    }

    @GetMapping("/store")
    public String StorePage() {
        return "/mypage/store";
    }

    @GetMapping("/store_review")
    public String Store_reviewPage() {
        return "/mypage/store_review";
    }

    @GetMapping("/address")
    public String AddressPage() {
        return "/order/address";
    }

    @GetMapping("/address_modify")
    public String Address_modifyPage() {
        return "/order/address_modify";
    }

    @GetMapping("/address_search")
    public String Address_searchPage() {
        return "/order/address_search";
    }

    @GetMapping("/address_select")
    public String Address_selectPage() {
        return "/order/address_select";
    }

    @GetMapping("/deal_complete")
    public String Deal_completePage() {
        return "/order/deal_complete";
    }

    @GetMapping("/order_a")
    public String Order_aPage() {
        return "/order/order_a";
    }

    @GetMapping("/order_b")
    public String Order_bPage() {
        return "/order/order_b";
    }

    @GetMapping("/review")
    public String ReviewPage() {
        return "/order/review";
    }



}
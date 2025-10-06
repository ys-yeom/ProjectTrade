package com.trade.ProjectTrade.controller;

import com.trade.ProjectTrade.common.Pagination;
import com.trade.ProjectTrade.model.TradeDTO;
import com.trade.ProjectTrade.service.MemberService;
import com.trade.ProjectTrade.service.TradeService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequiredArgsConstructor
@RequestMapping("/trade")
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/login")
    public String LoginPage() {
        return "login/login";
    }



    @GetMapping("/memberjoin")
    public String MemberjoinPage() {
        return "/login/memberjoin";
    }




}

package com.trade.ProjectTrade.controller;

import com.trade.ProjectTrade.model.MemberDTO;
import com.trade.ProjectTrade.model.TradeDTO;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import com.trade.ProjectTrade.common.Pagination;
import com.trade.ProjectTrade.service.TradeService;

@Controller
@RequiredArgsConstructor
@RequestMapping("/trade")
public class TradeController {

    private final TradeService tradeService;

    @GetMapping("/trade")
    public String tradePage(HttpServletRequest request, @RequestParam(defaultValue = "1") int pageNum, Model model) {
        Pagination pg = new Pagination();
        pg.setPageNum(pageNum);

        model.addAttribute("list", tradeService.findAll(pg));
        model.addAttribute("paging", pg.paging(request));

        return "/trade/trade";
    }

    @GetMapping("/trade_sub/{productId}")
    public String trade_subPage(@PathVariable int productId, Model model) {

        model.addAttribute("trade", tradeService.selectById(productId));
        System.out.println("/trade/trade_sub-------------------------" +productId);

        return "/trade/trade_sub";
    }

    @GetMapping("/enroll")
    public String EnrollPage() {
        return "/menu/enroll";
    }

    @PostMapping("/enrollDetail")
    public String joinComplete(@ModelAttribute TradeDTO tradeDTO, Model model) {


        tradeService.insertTrade(tradeDTO);

        model.addAttribute("email", memberDto.getEmail());
        model.addAttribute("password", memberDto.getPassword());
        model.addAttribute("name", memberDto.getMember_name());
        model.addAttribute("mobile", memberDto.getMobile());
        model.addAttribute("address", memberDto.getAddress());
        model.addAttribute("email", memberDto.getEmail());
        model.addAttribute("password", memberDto.getPassword());
        model.addAttribute("name", memberDto.getMember_name());
        model.addAttribute("mobile", memberDto.getMobile());
        model.addAttribute("address", memberDto.getAddress());
        model.addAttribute("email", memberDto.getEmail());
        model.addAttribute("password", memberDto.getPassword());
        model.addAttribute("name", memberDto.getMember_name());
        model.addAttribute("mobile", memberDto.getMobile());
        model.addAttribute("address", memberDto.getAddress());

        return "/login/login";
    }



}

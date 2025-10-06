package com.trade.ProjectTrade.controller;

import com.trade.ProjectTrade.model.TradeDTO;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import com.trade.ProjectTrade.common.Pagination;
import com.trade.ProjectTrade.service.TradeService;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

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



}

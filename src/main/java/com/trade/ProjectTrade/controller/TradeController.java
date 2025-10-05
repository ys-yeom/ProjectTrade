package com.trade.ProjectTrade.controller;

import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import com.trade.ProjectTrade.common.Pagination;
import com.trade.ProjectTrade.model.TradeDTO;
import com.trade.ProjectTrade.service.TradeService;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequiredArgsConstructor
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



}

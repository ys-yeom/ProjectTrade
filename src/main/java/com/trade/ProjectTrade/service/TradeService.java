package com.trade.ProjectTrade.service;

import com.trade.ProjectTrade.common.Pagination;
import com.trade.ProjectTrade.mapper.TradeMapper;
import com.trade.ProjectTrade.model.TradeDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TradeService {
    private final TradeMapper tradeMapper;

    public List<TradeDTO> findAll(Pagination pg) {
        pg.setTotalRecord(tradeMapper.totalTrade(pg));
        return tradeMapper.selectAll(pg);
    }

//    public int insertCook(CookDTO cookDTO) {
//        return cookMapper.insertCook(cookDTO);
//    }

}

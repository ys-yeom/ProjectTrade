package com.trade.ProjectTrade.mapper;

import com.trade.ProjectTrade.common.Pagination;
import com.trade.ProjectTrade.model.TradeDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface TradeMapper {
    List<TradeDTO> selectAll(Pagination pg);
    int totalTrade(Pagination pg);

    TradeDTO selectById(int product_id);;
    int insertTrade(TradeDTO TradeDTO);
}
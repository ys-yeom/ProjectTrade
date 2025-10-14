package com.trade.ProjectTrade.mapper;

import com.trade.ProjectTrade.common.Pagination;
import com.trade.ProjectTrade.model.MyPageDTO;
import com.trade.ProjectTrade.model.TradeDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MyPageMapper {

    MyPageDTO selectById(int store_id);

    /*int updateStoreName(@Param("memberId") int memberId, @Param("newName") String newName);*/

}
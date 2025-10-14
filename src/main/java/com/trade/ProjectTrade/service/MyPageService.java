package com.trade.ProjectTrade.service;

import com.trade.ProjectTrade.common.Pagination;
import com.trade.ProjectTrade.mapper.MyPageMapper;
import com.trade.ProjectTrade.mapper.TradeMapper;
import com.trade.ProjectTrade.model.MyPageDTO;
import com.trade.ProjectTrade.model.TradeDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MyPageService {
    private final MyPageMapper myPageMapper;

    public MyPageDTO selectById(int store_id) {
        System.out.println("RecipeLabService" + myPageMapper.selectById(store_id));
        return myPageMapper.selectById(store_id);
    }

//    public int updateStoreName(int memberId, String newName) {
//        return myPageMapper.updateStoreName(memberId, newName);
//    }

}

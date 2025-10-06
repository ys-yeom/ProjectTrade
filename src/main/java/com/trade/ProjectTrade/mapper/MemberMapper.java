package com.trade.ProjectTrade.mapper;

import com.trade.ProjectTrade.model.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MemberMapper {
    List<MemberDTO> selectAll();


}
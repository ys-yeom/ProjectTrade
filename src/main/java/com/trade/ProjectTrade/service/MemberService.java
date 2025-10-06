package com.trade.ProjectTrade.service;

import com.trade.ProjectTrade.mapper.MemberMapper;
import com.trade.ProjectTrade.model.MemberDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberMapper memberMapper;

    public List<MemberDTO> findAll() {
        return memberMapper.selectAll();
    }


}

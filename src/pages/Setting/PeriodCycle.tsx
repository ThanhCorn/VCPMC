import React, { useState } from 'react';
import styled from 'styled-components';
import SideMenu from '../../components/SideMenu';
import PageContent from '../../components/PageContent';
import { RightOutlined } from '@ant-design/icons';
import { Button, DatePicker, Radio, Select } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
const { Group } = Radio;

const PeriodCycle = () => {
  const [value, setValue] = useState<string>('quarterly');

  const handleRadioChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleSave = () => {
    toast('🦄 Lưu cài đặt chu kỳ đối soát thành công!', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const quyOptions = [
    { label: 'Quý 1: 1/06-30/7', value: 'quy1' },
    { label: 'Quý 2: 1/08-30/9', value: 'quy2' },
    { label: 'Quý 3: 1/10-30/11', value: 'quy3' },
    { label: 'Quý 4: 1/12-30/12', value: 'quy4' },
  ];

  const startDateOption = [
    { label: 'Ngày bắt đầu:', value: 'startDate' },
    { label: 'Ngày kết thúc:', value: 'endDate' },
  ];
  return (
    <Wrapper>
      <div className="content">
        <div className="header-text">
          <span>
            {' '}
            Trang chủ
            <RightOutlined />
          </span>
          <span>
            Cài đặt hệ thống <RightOutlined />
          </span>
          <span>Thông tin tác phẩm</span>
        </div>

        <h1>Cài đặt hệ thống</h1>
        <div className="content-radio">
          <h2>Cài đặt chu kì đối soát</h2>
          <Group
            onChange={handleRadioChange}
            value={value}
            style={{ marginBottom: '20px' }}
          >
            <Radio value="quarterly">Đối soát theo quý</Radio>
          </Group>
          {value === 'quarterly' && (
            <div style={{ marginTop: '-20px' }}>
              {quyOptions.map((option) => (
                <p key={option.value} data-value={option.value}>
                  {option.label}
                </p>
              ))}
            </div>
          )}
          <Group
            onChange={handleRadioChange}
            value={value}
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '20px',
            }}
          >
            <Radio value="monthly">Đối soát theo tháng</Radio>{' '}
          </Group>

          {value === 'monthly' && (
            <div style={{ display: 'flex' }}>
              {startDateOption.map((option) => (
                <p key={option.value} style={{ marginRight: '100px' }}>
                  {option.label}{' '}
                  <DatePicker
                    style={{
                      width: '300px',
                      marginLeft: '50px',
                      background: '#727288',
                      border: 'none',
                    }}
                  />
                </p>
              ))}
            </div>
          )}
        </div>
        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            onClick={handleSave}
            style={{ width: '168px', height: '40px', background: '#FF7506' }}
            type="primary"
          >
            {' '}
            Lưu
          </Button>
        </div>
        <ToastContainer toastStyle={{ width: '350px' }} />
      </div>
    </Wrapper>
  );
};

export default PeriodCycle;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex: 1;
  background-color: var(--primary-color);
  .content {
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 70px;
    flex: 1;
    .header-text {
      display: flex;
      align-items: center;
      color: #fff;
      opacity: 0.5;

      svg {
        color: #ffac69;
        margin-right: 5px;
      }
    }
    .content-radio {
      display: flex;
      flex-direction: column;
      width: 1611px;
      height: 750px;
      background: rgba(47, 47, 65, 0.7);
      padding: 30px;
      border-radius: 16px;
      .ant-radio-wrapper {
        height: 24px;
        color: #ffffff;
        font-size: 16px;
      }
      p {
        margin-left: 24px;
      }
    }
  }
`;

import styled from 'styled-components';
import SideMenu from '../../components/SideMenu';
import PageContent from '../../components/PageContent';
import { RightOutlined } from '@ant-design/icons';
import { Button, Card, Space } from 'antd';

const Guide = () => {
  return (
    <Wrapper>
      <SideMenu />
      <PageContent />
      <div className="content">
        <h4 style={{ color: 'white' }}>
          Hổ trợ <RightOutlined /> Hướng dẫn sử dụng
        </h4>
        <h1>Hướng dẫn sử dụng</h1>
        <div style={{ display: 'flex' }}>
          <Space
            style={{ display: 'flex', width: '18vw', background: '#39394D' }}
            className="space-1"
            direction="vertical"
            size="middle"
          >
            <Card title="Danh mục hướng dẫn" size="default">
              <p
                style={{
                  borderLeft: '5px solid #FF7506',
                  color: '#FF7506',
                  fontSize: '18px',
                  height: '34px',
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;1. Lorem ipsumdolor sit amet
              </p>
              <p
                style={{
                  color: '#fff',
                  fontSize: '18px',
                  height: '34px',
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Consectetur adipiscing elit sed
                do
              </p>
              <p
                style={{
                  color: '#fff',
                  fontSize: '18px',
                  height: '34px',
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Iusmod tempor incididunt ut
                labo
              </p>
              <p
                style={{
                  color: '#fff',
                  fontSize: '18px',
                  height: '34px',
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4. Ut enim ad minim veniam
              </p>
              <p
                style={{
                  color: '#fff',
                  fontSize: '18px',
                  height: '34px',
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5. Quis nostrud exercitation
                ullamco
              </p>
              <p
                style={{
                  color: '#fff',
                  fontSize: '18px',
                  height: '34px',
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;6. Excepteur sint occaecat
                cupidatats
              </p>
              <p
                style={{
                  color: '#fff',
                  fontSize: '18px',
                  height: '34px',
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7. Sunt in culpa qui officiat
              </p>
              <p
                style={{
                  color: '#fff',
                  fontSize: '18px',
                  height: '34px',
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8. Sed ut perspiciatis unde omnis
                iste
              </p>
            </Card>
          </Space>
          <Space
            className="space-2"
            direction="vertical"
            size="middle"
            style={{ display: 'flex', width: '65vw', marginLeft: '2vw' }}
          >
            <Card
              title="Lorem ipsum dolor sit amet"
              size="default"
              style={{ color: '#fff' }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam
                diam sed lacus lacus. In eget morbi eros, vitae enim nunc,
                cursus. Nisl eleifend lectus nunc massa aliquam, tellus in
                imperdiet. Malesuada suspendisse gravida tortor neque quis
                accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean.
                Facilisis scelerisque placerat eget lorem eget maecenas.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam
                diam sed lacus lacus. In eget morbi eros, vitae enim nunc,
                cursus. Nisl eleifend lectus nunc massa aliquam, tellus in
                imperdiet. Malesuada suspendisse gravida tortor neque quis
                accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean.
                Facilisis scelerisque placerat eget lorem eget maecenas.
              </p>
              <span>
                ❤ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
                <br />
              </span>
              <span>
                ❤ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
                <br />
              </span>
              <span>
                ❤ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam
                diam sed lacus lacus. In eget morbi eros, vitae enim nunc,
                cursus. Nisl eleifend lectus nunc massa aliquam, tellus in
                imperdiet. Malesuada suspendisse gravida tortor neque quis
                accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean.
                Facilisis scelerisque placerat eget lorem eget maecenas.
                <br /> Sed ut perspiciatis unde omnis iste natus error sit
                voluptatem accusantium doloremque laudantium, totam rem aperiam,
                eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
                ipsum quia dolor sit amet, consectetur.
                <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam
                diam sed lacus lacus. In eget morbi eros, vitae enim nunc,
                cursus. Nisl eleifend lectus nunc massa aliquam, tellus in
                imperdiet. Malesuada suspendisse gravida tortor neque quis
                accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean.
                Facilisis scelerisque placerat eget lorem eget maecenas. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
              <span>
                ❤ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
                <br />
              </span>
              <span>
                ❤ Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Platea sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam.
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
                sit placerat odio lorem. Cum eleifend bibendum ipsum quis
                scelerisque dui nibh odio id. Nam cras nec non posuere etiam
                diam sed lacus lacus. In eget morbi eros, vitae enim nunc,
                cursus. Nisl eleifend lectus nunc massa aliquam, tellus in
                imperdiet. Malesuada suspendisse gravida tortor neque quis
                accumsan et posuere. Ac turpis urna ipsum pretium nisi aenean.
                Facilisis scelerisque placerat eget lorem eget maecenas. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </Card>
          </Space>
        </div>
      </div>
    </Wrapper>
  );
};

export default Guide;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: var(--primary-color);
  .content {
    margin-top: 50px;
    margin-left: 50px;
    margin-right: 70px;
    flex: 1;
    h1 {
      margin-top: -20px;
      width: 600px;
      height: 48px;
      font-size: 36px;
      line-height: 48px;
      color: #ffffff;
    }
    h4 {
      font-weight: 200;
      opacity: 0.5;
      font-size: 16px;
      svg {
        color: #ffac69;
      }
    }
    .btn {
      margin-bottom: 20px;
      width: 309px;
      border: 1px solid #ff7506;
      border-radius: 24px;

      .button-1,
      .button-2 {
        border-radius: 24px;
        background: none;
      }
      .button-1 {
        border-top-right-radius: 24px;
        border-bottom-right-radius: 24px;
        border-right: none;
      }
      .button-2 {
        border-top-left-radius: 24px;
        border-bottom-left-radius: 24px;
        border-left: none;
      }
      .active {
        background: #b65100;
      }
    }
    .space-1 {
      background: #2b2b3f;
      .ant-card-bordered {
        border: none;
      }
      .ant-card-head {
        border-radius: none;
        color: white;
        background: #39394d;
        .ant-card-head-title {
          font-weight: 700;
          font-size: 24px;
        }
      }
      .ant-card-body {
        height: 720px;

        padding-left: 0;
        background: #2b2b3f;
      }
    }
    .space-2 {
      .ant-card {
        border: none;
      }
      .ant-card-head {
        color: #ff7506;
        background: #2b2b3f;
        border-bottom: 0 !important;
        .ant-card-head-title {
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 700;
          font-size: 24px;
          color: #ff7506;
        }
      }
      .ant-card-body {
        background: #2b2b3f;
        p,
        span {
          opacity: 0.7;
        }
      }
    }
  }
`;

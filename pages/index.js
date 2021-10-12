import Select from 'react-select';

import Layout from 'components/Layout';

import Form, { Step } from 'components/Form';

import { Container } from 'components/UI';
import { useState } from 'react';

export default function HomePage() {
  const [needTemp, setNeedTemp] = useState(false);

  return (
    <>
      <Layout>
        <Container>
          <div className="page-header">
            <h2 className="page-title">
              FTL: Прямая машина
            </h2>
          </div>
          <div className="page-content">
            <div className="page-content_left">
              <Form>
                {/* Step 1 */}
                <Step id="step-1">
                  <Step.Header title="Маршрут" step={1} />
                  <Step.Body>
                    {/* Control 1 */}
                    <Step.Control>
                      <Step.Label label="Откуда" />
                      <Step.Input type="text" />
                    </Step.Control>
                    {/* Control 2 */}
                    <Step.Control>
                      <Step.Label label="Куда" />
                      <Step.Input type="text" />
                    </Step.Control>
                  </Step.Body>
                </Step>

                {/* Step 2 */}
                <Step id="step-2">
                  <Step.Header title="Транспорт" step={2} />
                  <Step.Body>
                    {/* Step Group */}
                    <div className="step-group">
                      {/* Control 1 */}
                      <Step.Control>
                        <Step.Label label="Грузоподъёмность" />
                        <Select
                          className="customSelect"
                          classNamePrefix="customSelect"
                          defaultValue="Не выбрана"
                          options={[
                            { label: 'Не выбрана' },
                            { label: 'Вариант 1' },
                            { label: 'Вариант 2' },
                            { label: 'Вариант 3' },
                            { label: 'Вариант 4' },
                            { label: 'Вариант 5' },
                          ]}
                          placeholder="Не выбрана"
                        />
                      </Step.Control>
                      {/* Control 2 */}
                      <Step.Control>
                        <Step.Label label="Способ погрузки" />
                        <Select
                          className="customSelect"
                          classNamePrefix="customSelect"
                          defaultValue="Не выбрана"
                          options={[
                            { label: 'Не выбрана' },
                            { label: 'Задняя' },
                            { label: 'Вариант 2' },
                            { label: 'Вариант 3' },
                            { label: 'Вариант 4' },
                            { label: 'Вариант 5' },
                          ]}
                          placeholder="Не выбрана"
                        />
                      </Step.Control>
                    </div>
                  </Step.Body>
                </Step>

                {/* Step 3 */}
                <Step id="step-3">
                  <Step.Header title="Груз" step={3} />
                  {/* Control */}
                  <Step.Control>
                    <Step.Label label="Тип груза" />
                    <Select
                      className="customSelect"
                      classNamePrefix="customSelect"
                      defaultValue="Не выбрана"
                      options={[
                        { label: 'Не выбрана' },
                        { label: 'Вариант 1' },
                        { label: 'Вариант 2' },
                        { label: 'Вариант 3' },
                        { label: 'Вариант 4' },
                        { label: 'Вариант 5' },
                      ]}
                      placeholder="Не выбрана"
                    />
                  </Step.Control>
                  {/* Group */}
                  <div className="step-group">
                    {/* Control 1 */}
                    <Step.Control>
                      <Step.Label label="Класс опасности" />
                      <Select
                        className="customSelect"
                        classNamePrefix="customSelect"
                        defaultValue="Не выбрана"
                        options={[
                          { label: 'Не выбрана' },
                          { label: 'Вариант 1' },
                          { label: 'Вариант 2' },
                          { label: 'Вариант 3' },
                          { label: 'Вариант 4' },
                          { label: 'Вариант 5' },
                        ]}
                        placeholder="Не выбрана"
                      />
                    </Step.Control>
                    {/* Control 2 */}
                    <Step.Control>
                      <Step.Label label="Объявленная ценность, ₽" />
                      <Step.Input type="text" placeholder="≥ 1" />
                    </Step.Control>
                  </div>
                  <div className="step-group" style={{ paddingBottom: '24px' }}>
                    {/* Check Box */}
                    <div className="step-checkbox">
                      <label className="container">
                        <p>Требуется температурный режим</p>
                        <input type="checkbox" onClick={() => setNeedTemp(!needTemp)} checked={needTemp} />
                        <span className="mark" />
                      </label>
                    </div>
                    {needTemp && (
                      <>
                        {/* Control 3 */}
                        <Step.Control>
                          <Step.Label label="От, °C" />
                          <Step.Input type="text" />
                        </Step.Control>
                        {/* Control 4 */}
                        <Step.Control>
                          <Step.Label label="До, °C" />
                          <Step.Input type="text" />
                        </Step.Control>
                      </>
                    )}
                  </div>
                </Step>

                <Step>
                  <Step.Header title="Время" step={4} />


                  <Step.Control>
                    <Step.Label label="Комментарий к заказу" />
                    <textarea rows={3} placeholder="Укажите особенности въезда на территорию склада или подъезда к адресу" />
                  </Step.Control>
                </Step>

              </Form>
            </div>
            <div className="page-content_right">
              <div className="card">
                <p className="card__content">
                  Для расчета стоимости необходимо ввести параметры груза, пункты отправки и прибытия.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
      <style jsx>
        {`
        .page-header {
          margin-bottom: 20px;
          @media (max-width: 676px) {
            margin-bottom: 22px;
          }
        }
          
        .page-title {
          margin: 0;
          @media (max-width: 992px) {
            font-size: 2.5rem;
          }
          @media (max-width: 676px) {
            font-size: 2rem;
            line-height: 2.5rem;
          }
        }
        
        .page-content,
        .step-group {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          
          &_left,
          &_right {
            width: calc(50% - 8px);
            @media (max-width: 767px) {
              width: 100%;
            }
          }
        }
        
        .step-group :global(.step-control) {
          width: calc(50% - 6px);
        }
        
        :global(#step-2),
        :global(#step-3) {
          width: 50%;
          
          @media (max-width: 1300px) {
            width: 100%;
          }
        }
        
        .step-checkbox {
        
          margin-bottom: 16px;
          .container {
           display: block;
            height: 100%;
            position: relative;
            padding-left: 40px;
            margin-bottom: calc(24px + 3px + 3px - 1rem );
            cursor: pointer;
            user-select: none;
            
            p {
              display: flex;
              align-items: center;
              height: 100%;
              margin: 0;
              font-size: 0.813rem;
              line-height: 1rem;
            }
            
            input {
              position: absolute;
              opacity: 0;
              cursor: pointer;
              height: 0;
              width: 0;
              
              &:checked ~ .mark {
                background-color: #EF483E;
                border-color: #EF483E;
                &:after {
                  display: block;
                }
              }
            }
            
            .mark {
              position: absolute;
              top: 0;
              left: 0;
              height: 24px;
              width: 24px;
              background-color: transparent;
              border: 3px solid white;
              
              &:after {
                content: "";
                position: absolute;
                display: none;
                top: 5px; left: 9px;
                width: 4px;
                height: 10px;
                border: solid white;
                border-width: 0 3px 3px 0;
                transform: rotate(45deg);
              }
            }
          }
        }
        
        textarea {
          margin-bottom: 24px;
          border: none;
        
          font-weight: 400;
          font-size: 0.938rem;
          line-height: 1.125rem;
        
          outline: none;
        
          padding: 13px 0 13px 14px;
        
          &::placeholder {
            color: #CFCFCF;
          }
        }
        
        :global(.customSelect__control) {
          background-color: white!important;
          border: none!important;
          border-radius: 0!important;
          font-weight: 400 !important;
          font-size: 0.938rem!important;
          line-height: 1.125rem!important;
          outline: none!important;
          padding: 12px 0 12px 14px;
          box-shadow: none!important;
          cursor: pointer;
        }
        :global(.customSelect__placeholder) {
          white-space: nowrap;
          margin: 0;
          padding: 0;
        }
        
        :global(.customSelect__indicator-separator) {
          display: none;
        }
        
        :global(.customSelect__value-container) {
          padding: 0!important;
        }
        
        :global(.customSelect__single-value) {
          padding: 0;
          margin: 0;
        }
        
        :global(.customSelect__input-container) {
          padding: 0;
          margin: 0;
        }
        
        
        :global(.customSelect__indicators) {
          padding: 0;
        }
        
        :global(.customSelect__indicator) {
          color: black!important;
          padding: 0 14px 0 0;
        }
        
        :global(.customSelect__control.customSelect__control--menu-is-open .customSelect__indicator svg) {
          transform: rotate(-180deg);
          top: calc(50% - 15px);
        }
        
        :global(.customSelect__menu) {
        
        }
        
        :global(.customSelect__option) {
          padding: 10px 23px!important;
          cursor: pointer;
           border: none!important;
           color: black;
        }
        
        :global(.customSelect__option--is-selected) {
          background-color: white;
          color: black;
        }
           
        :global(.customSelect__option--is-focused),
        :global(.customSelect__option--is-selected.customSelect__option--is-focused) {
          background: #EF483E !important;
          color: white !important;
        }
        
        .card {
          max-width: 356px;
        
          padding: 24px;
          
          background: #4B4B4F;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          
          p {
            margin: 0;
          }
        }
      `}
      </style>
    </>
  );
}

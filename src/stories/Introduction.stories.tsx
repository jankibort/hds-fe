import { Meta } from '@storybook/react';

const Introduction = () => (
  <>
    <meta title="Introduction" />

    <div className="sb-container p-6">
      <h4 className="sb-section-title pb-6">
        <b>Highly Driven Studio</b> webpage is being developed using:
      </h4>
      <ul>
        <li>Tailwind CSS</li>
      </ul>
    </div>

    <style>
      {`
  .sb-container {
    margin-bottom: 48px;
  }


  img {
    object-fit: cover;
  }

  .sb-section-title {
    margin-bottom: 32px;
    font-size: 22px;
    font-weight: 600;
  }

  .sb-section-item, .sb-grid-item {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .sb-section-item-heading {
    padding-top: 20px !important;
    padding-bottom: 5px !important;
    margin: 0 !important;
  }
  .sb-section-item-paragraph {
    margin: 0;
    padding-bottom: 10px;
  }

  .sb-addon-img img {
    width: 650px;
    transform: rotate(-15deg);
    margin-left: 40px;
    margin-top: -72px;
    box-shadow: 0 0 1px rgba(255, 255, 255, 0);
    backface-visibility: hidden;
  }

  @media screen and (max-width: 800px) {
    .sb-addon-img {
      left: 300px;
    }
  }

  @media screen and (max-width: 600px) {
    .sb-section {
      flex-direction: column;
    }

    .sb-addon-text {
      padding-left: 24px;
    }

    .sb-addon-img {
      right: 0;
      left: 0;
      top: 130px;
      bottom: 0;
      overflow: hidden;
      height: auto;
      width: 124%;
    }

    .sb-addon-img img {
      width: 1200px;
      transform: rotate(-12deg);
      margin-left: 0;
      margin-top: 48px;
      margin-bottom: -40px;
      margin-left: -24px;
    }
  }
  `}
    </style>
  </>
);

const meta = {
  title: 'Introduction',
  component: Introduction,
} satisfies Meta<typeof Introduction>;

export default meta;

export const Default = {};

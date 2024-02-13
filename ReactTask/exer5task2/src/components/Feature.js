import React, { useState } from "react";
import {
  EuiFlexGrid,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiSplitPanel,
  EuiText,
  EuiButton,
  EuiTextArea,
} from "@elastic/eui";
import { useNavigate, useParams } from "react-router-dom";

const Feature = () => {
  const [features, setFeatures] = useState({
    feature1: "",
    feature2: "",
    feature3: "",
  });

  const [main, setMain] = useState("");

  const navigate = useNavigate();

  const handleChange = (event, target) => {
    console.log(event,target)
    const { name, value } = event.target;

    setFeatures((prevFeatures) => ({
      ...prevFeatures,
      [name]: value,
    }));

    if (target === "main") {
      setMain(value);
    }
  };

  const [isClicked, setIsClicked] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleClick = () => {
    navigate("/feature1");
    setIsClicked(true);
    setIsDisabled(!isDisabled);
  };

  return (
    <div style={{ margin: "10px" }}>
      <EuiSplitPanel.Outer direction="row" grow={true}>
        <EuiSplitPanel.Inner>
          <EuiFlexGrid columns={3}>
            <EuiFlexItem
              style={{
                border: "2px solid gray",
                height: "500px",
                width: "100%",
              }}
            >
              <EuiText>Feature 1</EuiText>
              <EuiTextArea
                name="feature1"
                placeholder="Placeholder text"
                aria-label="Use aria labels when no actual label is in use"
                value={isClicked ? main : features.feature1}
                onChange={(e) => handleChange(e, "feature1")}
                disabled={isDisabled}
                readOnly={!isClicked}
              />
            </EuiFlexItem>
            <EuiFlexItem
              style={{ border: "2px solid", height: "500px", width: "100%" }}
            >
              <EuiText>Feature 2</EuiText>
              <EuiTextArea
                name="feature2"
                placeholder="Placeholder text"
                aria-label="Use aria labels when no actual label is in use"
                value={isClicked ? main : features.feature2}
                onChange={(e) => handleChange(e, "feature2")}
                disabled={isDisabled}
              />
            </EuiFlexItem>
            <EuiFlexItem
              style={{ border: "2px solid", height: "500px", width: "100%" }}
            >
              <EuiText>Feature 3</EuiText>
              <EuiTextArea
                name="feature3"
                placeholder="Placeholder text"
                aria-label="Use aria labels when no actual label is in use"
                value={isClicked ? main : features.feature3}
                onChange={(e) => handleChange(e, "feature3")}
                disabled={isDisabled}
              />
            </EuiFlexItem>
          </EuiFlexGrid>
        </EuiSplitPanel.Inner>
      </EuiSplitPanel.Outer>
      <EuiSpacer />
      <EuiFlexGroup gutterSize="m">
        <EuiFlexItem
          style={{
            // border: "2px solid gray",
            height: "300px",
            width: "10px",
          }}
        >
          <EuiSplitPanel.Outer grow>
            <EuiSplitPanel.Inner>
              <EuiButton
                fullWidth
                fill
                onClick={handleClick}
              >
                Feature 1
              </EuiButton>
              <EuiSpacer />
              <EuiButton
                fullWidth
                fill
                onClick={() => {
                  navigate("/feature2");
                }}
              >
                Feature 2
              </EuiButton>
              <EuiSpacer />
              <EuiButton
                fullWidth
                fill
                onClick={() => {
                  navigate("/feature3");
                }}
              >
                Feature 3
              </EuiButton>
            </EuiSplitPanel.Inner>
          </EuiSplitPanel.Outer>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiSplitPanel.Outer grow={true}>
            <EuiSplitPanel.Inner>
              <EuiTextArea
                name="main"
                placeholder="Placeholder text"
                aria-label="Use aria labels when no actual label is in use"
                value={main}
                onChange={(e) => handleChange(e, "main")}
              />
            </EuiSplitPanel.Inner>
          </EuiSplitPanel.Outer>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
};

export default Feature;

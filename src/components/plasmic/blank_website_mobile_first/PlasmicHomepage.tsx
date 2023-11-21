// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 6hRmCuBtBWinhUZwzAzpn4
// Component: gUIbLx52Xnyo

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { Timer } from "@plasmicpkgs/plasmic-basic-components";
import Button from "../../Button"; // plasmic-import: HmiTUqbgwpvc/component
import Bubble from "../../Bubble"; // plasmic-import: DZxGYdaUeOO7/component
import TextInput from "../../TextInput"; // plasmic-import: cJN_OkWw8mUp/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import { useScreenVariants as useScreenVariantsrpL3ZAs942Ye } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: RpL3zAs942YE/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_website_mobile_first.module.css"; // plasmic-import: 6hRmCuBtBWinhUZwzAzpn4/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: gUIbLx52Xnyo/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: evIHOU4izkCw/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: md6HMGmSw-NA/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: XXyrI6qHcWX9/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
  timer?: p.Flex<typeof Timer>;
  bubble?: p.Flex<typeof Bubble>;
  textInput?: p.Flex<typeof TextInput>;
  svg?: p.Flex<"svg">;
  send?: p.Flex<typeof Button>;
};

export interface DefaultHomepageProps {
  className?: string;
}

const $$ = {};

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});
  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "currentPerson",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: $queries,
    $refs
  });
  const dataSourcesCtx = usePlasmicDataSourceContext();
  const plasmicInvalidate = usePlasmicInvalidate();

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    query: usePlasmicDataOp(() => {
      return {
        sourceId: "7wkerJ8WkRVDqh6zBFCrZd",
        opId: "5200bb4c-0afc-4cdb-a0e9-65ecada476fc",
        userArgs: {},
        cacheKey: `plasmic.$.5200bb4c-0afc-4cdb-a0e9-65ecada476fc.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsrpL3ZAs942Ye()
  });

  return (
    <React.Fragment>
      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <Timer
              data-plasmic-name={"timer"}
              data-plasmic-override={overrides.timer}
              className={classNames("__wab_instance", sty.timer)}
              intervalSeconds={1}
              isRunning={true}
              onTick={async () => {
                const $steps = {};

                $steps["airtableGetList"] = true
                  ? (() => {
                      const actionArgs = {
                        queryInvalidation: ["plasmic_refresh_all"]
                      };
                      return (async ({ queryInvalidation }) => {
                        if (!queryInvalidation) {
                          return;
                        }
                        await plasmicInvalidate(queryInvalidation);
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  $steps["airtableGetList"] != null &&
                  typeof $steps["airtableGetList"] === "object" &&
                  typeof $steps["airtableGetList"].then === "function"
                ) {
                  $steps["airtableGetList"] = await $steps["airtableGetList"];
                }
              }}
              runWhileEditing={false}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___6VnAs
              )}
            >
              {"You Are: "}
            </div>
            {(
              hasVariant(globalVariants, "screen", "desktopOnly")
                ? (() => {
                    try {
                      return $state.currentPerson === "";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return true;
                      }
                      throw e;
                    }
                  })()
                : true
            ) ? (
              <div className={classNames(projectcss.all, sty.freeBox__zpDg)}>
                {(
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? true
                    : false
                ) ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bEGi9
                    )}
                  >
                    {"You Are: "}
                  </div>
                ) : null}
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__fRkiP)}
                >
                  {(_par => (!_par ? [] : Array.isArray(_par) ? _par : [_par]))(
                    (() => {
                      try {
                        return [
                          ...new Set($queries.query.data.map(item => item.Name))
                        ];
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return [];
                        }
                        throw e;
                      }
                    })()
                  ).map((__plasmic_item_0, __plasmic_idx_0) => {
                    const currentItem = __plasmic_item_0;
                    const currentIndex = __plasmic_idx_0;
                    return (
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__dMnVc
                        )}
                        key={currentIndex}
                        onClick={async event => {
                          const $steps = {};

                          $steps["updateCurrentPerson"] = true
                            ? (() => {
                                const actionArgs = {
                                  variable: {
                                    objRoot: $state,
                                    variablePath: ["currentPerson"]
                                  },
                                  operation: 0,
                                  value: currentItem
                                };
                                return (({
                                  variable,
                                  value,
                                  startIndex,
                                  deleteCount
                                }) => {
                                  if (!variable) {
                                    return;
                                  }
                                  const { objRoot, variablePath } = variable;

                                  p.set(objRoot, variablePath, value);
                                  return value;
                                })?.apply(null, [actionArgs]);
                              })()
                            : undefined;
                          if (
                            $steps["updateCurrentPerson"] != null &&
                            typeof $steps["updateCurrentPerson"] === "object" &&
                            typeof $steps["updateCurrentPerson"].then ===
                              "function"
                          ) {
                            $steps["updateCurrentPerson"] = await $steps[
                              "updateCurrentPerson"
                            ];
                          }
                        }}
                        shape={"rounded"}
                        size={"compact"}
                      >
                        <React.Fragment>
                          {(() => {
                            try {
                              return currentItem;
                            } catch (e) {
                              if (
                                e instanceof TypeError ||
                                e?.plasmicType === "PlasmicUndefinedDataError"
                              ) {
                                return "Button";
                              }
                              throw e;
                            }
                          })()}
                        </React.Fragment>
                      </Button>
                    );
                  })}
                </p.Stack>
              </div>
            ) : null}
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__oOldb
              )}
            >
              {"Button"}
            </div>
            {(
              hasVariant(globalVariants, "screen", "desktopOnly")
                ? (() => {
                    try {
                      return $state.currentPerson !== "";
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return true;
                      }
                      throw e;
                    }
                  })()
                : true
            ) ? (
              <div className={classNames(projectcss.all, sty.freeBox___8YSnH)}>
                {(
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? (() => {
                        try {
                          return true;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return true;
                          }
                          throw e;
                        }
                      })()
                    : true
                ) ? (
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ggjL)}
                  >
                    {(_par =>
                      !_par ? [] : Array.isArray(_par) ? _par : [_par])(
                      (() => {
                        try {
                          return $queries.query.data;
                        } catch (e) {
                          if (
                            e instanceof TypeError ||
                            e?.plasmicType === "PlasmicUndefinedDataError"
                          ) {
                            return [];
                          }
                          throw e;
                        }
                      })()
                    ).map((__plasmic_item_0, __plasmic_idx_0) => {
                      const currentItem = __plasmic_item_0;
                      const currentIndex = __plasmic_idx_0;
                      return (
                        <Bubble
                          data-plasmic-name={"bubble"}
                          data-plasmic-override={overrides.bubble}
                          className={classNames("__wab_instance", sty.bubble)}
                          key={currentIndex}
                          msg={
                            hasVariant(globalVariants, "screen", "desktopOnly")
                              ? (() => {
                                  try {
                                    return currentItem.Message;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()
                              : undefined
                          }
                          name={
                            hasVariant(globalVariants, "screen", "desktopOnly")
                              ? (() => {
                                  try {
                                    return currentItem.Name;
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()
                              : undefined
                          }
                          notMe={
                            hasVariant(globalVariants, "screen", "desktopOnly")
                              ? (() => {
                                  try {
                                    return (
                                      currentItem.Name !== $state.currentPerson
                                    );
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return [];
                                    }
                                    throw e;
                                  }
                                })()
                              : undefined
                          }
                          time={
                            hasVariant(globalVariants, "screen", "desktopOnly")
                              ? (() => {
                                  try {
                                    return new Date(
                                      currentItem["send time"]
                                    ).toLocaleString("en-US", {
                                      month: "short",
                                      day: "numeric",
                                      hour: "numeric",
                                      minute: "numeric",
                                      second: "numeric",
                                      hour12: true
                                    });
                                  } catch (e) {
                                    if (
                                      e instanceof TypeError ||
                                      e?.plasmicType ===
                                        "PlasmicUndefinedDataError"
                                    ) {
                                      return undefined;
                                    }
                                    throw e;
                                  }
                                })()
                              : undefined
                          }
                        />
                      );
                    })}
                  </p.Stack>
                ) : null}
                <div className={classNames(projectcss.all, sty.freeBox__hs7Nf)}>
                  <TextInput
                    data-plasmic-name={"textInput"}
                    data-plasmic-override={overrides.textInput}
                    className={classNames("__wab_instance", sty.textInput)}
                    endIcon={
                      <React.Fragment>
                        <ChecksvgIcon
                          data-plasmic-name={"svg"}
                          data-plasmic-override={overrides.svg}
                          className={classNames(projectcss.all, sty.svg)}
                          role={"img"}
                        />

                        <Button
                          className={classNames(
                            "__wab_instance",
                            sty.button___4QkVp
                          )}
                          onClick={async event => {
                            const $steps = {};

                            $steps["airtableCreate"] = true
                              ? (() => {
                                  const actionArgs = {
                                    dataOp: {
                                      sourceId: "7wkerJ8WkRVDqh6zBFCrZd",
                                      opId: "18273e0e-c66d-4532-aa0f-c38321ffb76f",
                                      userArgs: {
                                        variables: [
                                          $state.currentPerson,
                                          $state.textInput.value,
                                          new Date().toISOString()
                                        ]
                                      },
                                      cacheKey: null,
                                      invalidatedKeys: ["plasmic_refresh_all"],
                                      roleId: null
                                    }
                                  };
                                  return (async ({
                                    dataOp,
                                    continueOnError
                                  }) => {
                                    try {
                                      const response =
                                        await executePlasmicDataOp(dataOp, {
                                          userAuthToken:
                                            dataSourcesCtx?.userAuthToken,
                                          user: dataSourcesCtx?.user
                                        });
                                      await plasmicInvalidate(
                                        dataOp.invalidatedKeys
                                      );
                                      return response;
                                    } catch (e) {
                                      if (!continueOnError) {
                                        throw e;
                                      }
                                      return e;
                                    }
                                  })?.apply(null, [actionArgs]);
                                })()
                              : undefined;
                            if (
                              $steps["airtableCreate"] != null &&
                              typeof $steps["airtableCreate"] === "object" &&
                              typeof $steps["airtableCreate"].then ===
                                "function"
                            ) {
                              $steps["airtableCreate"] = await $steps[
                                "airtableCreate"
                              ];
                            }

                            $steps["runCode"] = true
                              ? (() => {
                                  const actionArgs = {
                                    customFunction: async () => {
                                      return ($state.textInput.value = "");
                                    }
                                  };
                                  return (({ customFunction }) => {
                                    return customFunction();
                                  })?.apply(null, [actionArgs]);
                                })()
                              : undefined;
                            if (
                              $steps["runCode"] != null &&
                              typeof $steps["runCode"] === "object" &&
                              typeof $steps["runCode"].then === "function"
                            ) {
                              $steps["runCode"] = await $steps["runCode"];
                            }
                          }}
                        >
                          {"Send"}
                        </Button>
                      </React.Fragment>
                    }
                    onChange={(...eventArgs) => {
                      p.generateStateOnChangeProp($state, [
                        "textInput",
                        "value"
                      ])((e => e.target?.value).apply(null, eventArgs));
                    }}
                    onKeyPress={async event => {
                      const $steps = {};

                      $steps["airtableCreate"] =
                        event.key === "Enter"
                          ? (() => {
                              const actionArgs = {
                                dataOp: {
                                  sourceId: "7wkerJ8WkRVDqh6zBFCrZd",
                                  opId: "18273e0e-c66d-4532-aa0f-c38321ffb76f",
                                  userArgs: {
                                    variables: [
                                      $state.currentPerson,
                                      $state.textInput.value,
                                      new Date().toISOString()
                                    ]
                                  },
                                  cacheKey: null,
                                  invalidatedKeys: ["plasmic_refresh_all"],
                                  roleId: null
                                }
                              };
                              return (async ({ dataOp, continueOnError }) => {
                                try {
                                  const response = await executePlasmicDataOp(
                                    dataOp,
                                    {
                                      userAuthToken:
                                        dataSourcesCtx?.userAuthToken,
                                      user: dataSourcesCtx?.user
                                    }
                                  );
                                  await plasmicInvalidate(
                                    dataOp.invalidatedKeys
                                  );
                                  return response;
                                } catch (e) {
                                  if (!continueOnError) {
                                    throw e;
                                  }
                                  return e;
                                }
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                      if (
                        $steps["airtableCreate"] != null &&
                        typeof $steps["airtableCreate"] === "object" &&
                        typeof $steps["airtableCreate"].then === "function"
                      ) {
                        $steps["airtableCreate"] = await $steps[
                          "airtableCreate"
                        ];
                      }

                      $steps["updateTextInputValue"] =
                        event.key === "Enter"
                          ? (() => {
                              const actionArgs = {
                                variable: {
                                  objRoot: $state,
                                  variablePath: ["textInput", "value"]
                                },
                                operation: 0,
                                value: ""
                              };
                              return (({
                                variable,
                                value,
                                startIndex,
                                deleteCount
                              }) => {
                                if (!variable) {
                                  return;
                                }
                                const { objRoot, variablePath } = variable;

                                p.set(objRoot, variablePath, value);
                                return value;
                              })?.apply(null, [actionArgs]);
                            })()
                          : undefined;
                      if (
                        $steps["updateTextInputValue"] != null &&
                        typeof $steps["updateTextInputValue"] === "object" &&
                        typeof $steps["updateTextInputValue"].then ===
                          "function"
                      ) {
                        $steps["updateTextInputValue"] = await $steps[
                          "updateTextInputValue"
                        ];
                      }
                    }}
                    showEndIcon={true}
                    value={
                      p.generateStateValueProp($state, [
                        "textInput",
                        "value"
                      ]) ?? ""
                    }
                  />

                  <Button
                    data-plasmic-name={"send"}
                    data-plasmic-override={overrides.send}
                    className={classNames("__wab_instance", sty.send)}
                  >
                    {"Send"}
                  </Button>
                </div>
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section", "timer", "bubble", "textInput", "svg", "send"],
  section: ["section", "timer", "bubble", "textInput", "svg", "send"],
  timer: ["timer"],
  bubble: ["bubble"],
  textInput: ["textInput", "svg"],
  svg: ["svg"],
  send: ["send"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
  timer: typeof Timer;
  bubble: typeof Bubble;
  textInput: typeof TextInput;
  svg: "svg";
  send: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),
    timer: makeNodeComponent("timer"),
    bubble: makeNodeComponent("bubble"),
    textInput: makeNodeComponent("textInput"),
    svg: makeNodeComponent("svg"),
    send: makeNodeComponent("send"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */

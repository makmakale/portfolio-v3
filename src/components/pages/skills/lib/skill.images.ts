import { SkillIds } from "@/components/pages/skills/lib/skill.constants";

import html from "@/assets/images/skills/html.png";
import css from "@/assets/images/skills/css.png";
import js from "@/assets/images/skills/js.png";
import ts from "@/assets/images/skills/ts.png";
import react from "@/assets/images/skills/react.png";
import next from "@/assets/images/skills/next.png";
import redux from "@/assets/images/skills/redux.png";
import mobx from "@/assets/images/skills/mobx.png";
import zustand from "@/assets/images/skills/zustand.jpg";
import echarts from "@/assets/images/skills/echarts.png";
import formik from "@/assets/images/skills/formik.svg";
import i18 from "@/assets/images/skills/i18next.png";
import reactQuery from "@/assets/images/skills/reactQuery.png";
import reactHookForm from "@/assets/images/skills/react-hook-form.png";
import axios from "@/assets/images/skills/axios.jpg";
import shadcn from "@/assets/images/skills/shadcn.png";
import mui from "@/assets/images/skills/mui.png";
import sc from "@/assets/images/skills/sc.png";
import tailwind from "@/assets/images/skills/tailwind.png";
import bootstrap from "@/assets/images/skills/bootstrap.png";
import sass from "@/assets/images/skills/sass.png";
import github from "@/assets/images/skills/github.png";
import gitlab from "@/assets/images/skills/gitlab.png";
import jwt from "@/assets/images/skills/jwt.svg";
import node from "@/assets/images/skills/node.png";
import mapsApi from "@/assets/images/skills/google-maps.png";
import sequelize from "@/assets/images/skills/sequelize.png";
import prisma from "@/assets/images/skills/prisma.png";
import mysql from "@/assets/images/skills/mysql.png";
import postgre from "@/assets/images/skills/postgresql.png";
import mongodb from "@/assets/images/skills/mongodb.png";
import mongoose from "@/assets/images/skills/mongoose.png";
import handlebars from "@/assets/images/skills/handlebars.png";
import webpack from "@/assets/images/skills/webpack.png";
import vite from "@/assets/images/skills/vite.svg";
import jira from "@/assets/images/skills/jira.png";
import expo from "@/assets/images/skills/expo-icon.svg";

export const skillImages = new Map<SkillIds, string>()
  .set(SkillIds.html, html.src)
  .set(SkillIds.css, css.src)
  .set(SkillIds.js, js.src)
  .set(SkillIds.ts, ts.src)
  .set(SkillIds.react, react.src)
  .set(SkillIds.reactNative, react.src)
  .set(SkillIds.next, next.src)
  .set(SkillIds.redux, redux.src)
  .set(SkillIds.reduxForm, redux.src)
  .set(SkillIds.formik, formik.src)
  .set(SkillIds.reduxToolkit, redux.src)
  .set(SkillIds.mobx, mobx.src)
  .set(SkillIds.zustand, zustand.src)
  .set(SkillIds.echarts, echarts.src)
  .set(SkillIds.i18, i18.src)
  .set(SkillIds.reactQuery, reactQuery.src)
  .set(SkillIds.reactHookForm, reactHookForm.src)
  .set(SkillIds.axios, axios.src)
  .set(SkillIds.shadcn, shadcn.src)
  .set(SkillIds.mui, mui.src)
  .set(SkillIds.sc, sc.src)
  .set(SkillIds.tailwind, tailwind.src)
  .set(SkillIds.bootstrap, bootstrap.src)
  .set(SkillIds.sass, sass.src)
  .set(SkillIds.github, github.src)
  .set(SkillIds.gitlab, gitlab.src)
  .set(SkillIds.jwt, jwt.src)
  .set(SkillIds.node, node.src)
  .set(SkillIds.googleMapsApi, mapsApi.src)
  .set(SkillIds.sequelize, sequelize.src)
  .set(SkillIds.prisma, prisma.src)
  .set(SkillIds.mysql, mysql.src)
  .set(SkillIds.postgre, postgre.src)
  .set(SkillIds.mongodb, mongodb.src)
  .set(SkillIds.mongoose, mongoose.src)
  .set(SkillIds.handlebars, handlebars.src)
  .set(SkillIds.webpack, webpack.src)
  .set(SkillIds.vite, vite.src)
  .set(SkillIds.jira, jira.src)
  .set(SkillIds.expo, expo.src);
